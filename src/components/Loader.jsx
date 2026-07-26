
export default function ProfessionalLogoLoader() {
  const color = "#f15a24";
  
  return (
    <div className="flex items-center justify-center p-8 bg-transparent">
      <div className="loader-container">
        <div 
          className="spinner"
          style={{ 
            borderColor: `${color}20`,
            borderTopColor: color
          }}
        />
      </div>

      <style>{`
        .loader-container {
          position: relative;
          width: 64px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .spinner {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border-style: solid;
          border-width: 4px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
