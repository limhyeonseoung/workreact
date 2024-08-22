import React, { useState } from 'react';
import './App.css'

function App() {
  // 좌석 리스트 상태
  const seats = Array.from({ length: 80 }, (_, i) => i + 1);

  // 선택된 좌석과 폼 표시 상태 관리
  const [selectedSeat, setSelectedSeat] = useState(null);
  const [showForm, setShowForm] = useState(false);

  // 좌석 클릭 핸들러
  const handleSeatClick = (seat) => {
    setSelectedSeat(seat);
    setShowForm(true); // 폼 표시
  };

  return (
    <div>
      <h1>영화관 좌석 예매</h1>
      <div className="seating-chart">
        {seats.map((seat) => (
          <button 
            key={seat} 
            onClick={() => handleSeatClick(seat)} 
            className="seat-button"
          >
            {seat}
          </button>
        ))}
      </div>

      {showForm && (
        <div className="purchase-form">
          <h2>{selectedSeat}번 좌석 예매</h2>
          <form>
            <label>
              이름:
              <input type="text" name="name" />
            </label>
            <br />
            <label>
              결제 정보:
              <input type="text" name="payment" />
            </label>
            <br />
            <button type="submit">구매</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default App;
