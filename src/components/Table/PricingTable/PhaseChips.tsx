import React from 'react';
import './PhaseChips.css';
import { ProductionPhase } from '../../../interfaces/Phase/ProductionPhase';

interface PhaseChipsProps {
  selectedPhases: ProductionPhase[];
  allPhases: ProductionPhase[];
  onToggle: (phase: ProductionPhase) => void;
}

const PhaseChips: React.FC<PhaseChipsProps> = ({ selectedPhases, allPhases, onToggle }) => {
  return (
    <div className="phase-container">
      {allPhases.map((phase) => (
        <div
          key={phase}
          className={`phase-chip ${selectedPhases.includes(phase) ? 'selected' : ''}`}
          onClick={() => onToggle(phase)}
        >
          {phase}
        </div>
      ))}
      {selectedPhases.length > 0 && (
        <div className="phase-count">{selectedPhases.length}</div>
      )}
    </div>
  );
};

export default PhaseChips;