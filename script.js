document.getElementById("fileInput").addEventListener("change", function(event) {
    const file = event.target.files[0];

    if (file) {
        
        document.getElementById("infoBox").style.display = "block";
        document.getElementById("fileName").textContent = file.name;
        document.getElementById("fileSize").textContent = (file.size / 1024).toFixed(2) + " KB";
        document.getElementById("fileType").textContent = file.type;
        document.getElementById("fileModified").textContent = new Date(file.lastModified).toLocaleString();

        
        const previewContainer = document.getElementById("preview");
        previewContainer.innerHTML = ""; 
        if (file.type.startsWith("image/")) {
            
            const img = document.createElement("img");
            img.src = URL.createObjectURL(file);
            previewContainer.appendChild(img);
        } else if (file.type.startsWith("video/")) {
            
            const video = document.createElement("video");
            video.src = URL.createObjectURL(file);
            video.controls = true;
            previewContainer.appendChild(video);
        } else if (file.type === "application/pdf") {
            
            const iframe = document.createElement("iframe");
            iframe.src = URL.createObjectURL(file);
            previewContainer.appendChild(iframe);
        } else {
            previewContainer.innerHTML = "<p>Unsupported file type for preview.</p>";
        }
    }
});
