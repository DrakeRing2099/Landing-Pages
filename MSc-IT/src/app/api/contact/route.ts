import { NextRequest, NextResponse } from 'next/server';
import * as fs from 'fs-extra';
import path from 'path';

// Define the path to store data
const DATA_DIRECTORY = path.join(process.cwd(), 'data');
const JSON_FILE_PATH = path.join(DATA_DIRECTORY, 'contact_submissions.json');

// Ensure data directory exists
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
    
    // Initialize JSON file if needed
    await initializeJsonFile();
    
    // Read current data
    const data = await fs.readJson(JSON_FILE_PATH);
    
    // Add new submission with timestamp
    data.submissions.push({
      timestamp: new Date().toISOString(),
      ...formData
    });
    
    // Write back to file
    await fs.writeJson(JSON_FILE_PATH, data, { spaces: 2 });
    console.log("Data written to JSON file successfully");
    
    return NextResponse.json({ 
      success: true,
      message: 'Data saved successfully',
      filePath: JSON_FILE_PATH
    });
  } catch (error) {
    console.error('Error saving form data:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to save form data', 
        details: error.message || 'Unknown error'
      },
      { status: 500 }
    );
  }
}