// MongoDB initialization script
// This script runs when the MongoDB container starts for the first time

print('🚀 Initializing Neuromatrix System Database...');

// Switch to the neuromatrix-system database
db = db.getSiblingDB('neuromatrix-system');

// Create collections
db.createCollection('contacts');

// Create indexes for better performance
db.contacts.createIndex({ "email": 1, "createdAt": -1 });
db.contacts.createIndex({ "createdAt": -1 });

// Insert sample data (optional)
db.contacts.insertOne({
  name: "Sample User",
  email: "sample@neuromatrix-systems.com",
  company: "Neuromatrix Systems",
  message: "This is a sample contact form submission for testing purposes.",
  ipAddress: "127.0.0.1",
  userAgent: "MongoDB Init Script",
  createdAt: new Date(),
  updatedAt: new Date()
});

print('✅ Database initialization completed!');
print('📊 Collections created: contacts');
print('🔍 Indexes created for optimal performance');
print('📝 Sample data inserted for testing');
