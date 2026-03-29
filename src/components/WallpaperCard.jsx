function WallpaperCard({ img, title }) {
  const handleDownload = () => {
    alert("🔒 Download qilish uchun login yoki premium kerak");
  };

  return (
    <div className="card">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <button onClick={handleDownload}>
        Download
      </button>
    </div>
  );
}

export default WallpaperCard;