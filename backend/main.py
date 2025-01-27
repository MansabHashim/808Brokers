from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from .storage_handler import StorageHandler

app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

storage_handler = StorageHandler()

@app.get("/api/storage-info")
async def get_storage_info():
    try:
        return storage_handler.get_storage_usage()
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/api/folder-sizes")
async def get_folder_sizes():
    try:
        return storage_handler.get_folder_sizes()
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e)) 