import { NextRequest, NextResponse } from 'next/server';
import * as fs from 'fs-extra';
import path from 'path';

const DATA_DIRECTORY = path.join(process.cwd(), 'data');
const JSON_FILE_PATH = path.join(DATA_DIRECTORY, 'contact_submissions.json');

fs.ensureDirSync(DATA_DIRECTORY);

// Initialize JSON file if it doesn't exist
async function initializeJsonFile() {
  if (!fs.existsSync(JSON_FILE_PATH)) {
    await fs.writeJson(JSON_FILE_PATH, { submissions: [] }, { spaces: 2 });
    console.log("Created new JSON file at:", JSON_FILE_PATH);
  }
}

export async function POST(request: NextRequest) {
  try {
    // Parse form data
    const formData = await request.json();
    console.log("Received form data:", formData);
    
    // Save to local JSON file as backup
    let localStorageSuccess = false;
    try {
      await initializeJsonFile();
      const data = await fs.readJson(JSON_FILE_PATH);
      data.submissions.push({
        timestamp: new Date().toISOString(),
        ...formData
      });
      await fs.writeJson(JSON_FILE_PATH, data, { spaces: 2 });
      console.log("Data written to JSON file successfully");
      localStorageSuccess = true;
    } catch (localError) {
      console.error("Error saving to local storage:", localError);
    }
    
    // Save to Google Sheets using the working Apps Script method
    let sheetsResult = false;
    try {
      sheetsResult = await addToGoogleSheetViaAppScript(formData);
    } catch (sheetsError) {
      console.error("Error with Google Sheets:", sheetsError);
    }
    
    return NextResponse.json({
      success: true,
      message: 'Form data received',
      savedToSheets: sheetsResult,
      savedLocally: localStorageSuccess,
      localFilePath: localStorageSuccess ? JSON_FILE_PATH : null
    });
  } catch (error) {
    console.error('Error processing form submission:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process form data' },
      { status: 500 }
    );
  }
}

// Only keep the working Apps Script function
async function addToGoogleSheetViaAppScript(formData: any) {
  try {
    // Your Apps Script Web App URL (already working)
    const response = await fetch("https://script.google.com/macros/s/AKfycbyGzmIjGIeusrYWjNmstIfU50UVULSZsXf0H90xZCDlaZf7z_S-0L8XWaQMvETZMBVtkA/exec", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        timestamp: new Date().toISOString(),
        name: formData.name || '',
        email: formData.email || '',
        phone: formData.phone || '',
        countryCode: formData.countryCode || '',
        state: formData.state || ''
      }),
    });
    
    if (!response.ok) {
      throw new Error(`Failed to add data: ${response.statusText}`);
    }
    
    const result = await response.json();
    console.log('Data added to Google Sheets via Apps Script:', result);
    return true;
  } catch (error) {
    console.error('Error adding data to Google Sheets via Apps Script:', error);
    return false;
  }
}