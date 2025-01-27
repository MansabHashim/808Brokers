from google.cloud import storage
import os

class StorageHandler:
    def __init__(self):
        self.client = storage.Client()
        self.bucket_name = os.getenv('GOOGLE_CLOUD_BUCKET')
        self.bucket = self.client.get_bucket(self.bucket_name)

    def get_storage_usage(self):
        """Calculate total storage usage in GB"""
        total_size = 0
        for blob in self.bucket.list_blobs():
            total_size += blob.size
        
        # Convert bytes to GB
        usage_gb = total_size / (1024 ** 3)
        return {
            'usedSpace': usage_gb,
            'totalSpace': 1.0,  # 1GB limit
            'usagePercentage': (usage_gb / 1.0) * 100
        }

    def get_folder_sizes(self):
        """Get size of each folder"""
        folder_sizes = {}
        for blob in self.bucket.list_blobs():
            path_parts = blob.name.split('/')
            if len(path_parts) > 1:
                folder = path_parts[0]
                if folder not in folder_sizes:
                    folder_sizes[folder] = 0
                folder_sizes[folder] += blob.size
        
        return {
            folder: size / (1024 ** 3)  # Convert to GB
            for folder, size in folder_sizes.items()
        } 