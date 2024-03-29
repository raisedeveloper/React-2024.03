import '../apps/App.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export default function Header({ filters, onFilterChange }) {
  return (
    <>
      <div>
        {
          filters.map((value, index) => (
            <span key={index}>
              <ButtonGroup aria-label="Basic example">
                                <button onClick={() => onFilterChange(value)} className='filterButton'> { value }
                </button>

              </ButtonGroup>
            </span>
          ))
        }
      </div>
      <hr />
    </ >
  );
}

// 헤더는 필터 기능을 제공 (각각의 할일을 선택하면 필터링해서 처리)
// 이 Header 컴포넌트는 할 일 목록을 필터링할 수 있는 기능을 제공하고, 사용자가 원하는 필터를 선택할 수 있도록 합니다.