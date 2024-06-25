import React, { useState } from 'react';
import './EditSkills.css';

interface EditSkillsProps {
    skills: string[];
    removeSkill: (skill: string) => void;
}

const EditSkills: React.FC<EditSkillsProps> = ({ skills, removeSkill }) => {
    const [newSkill, setNewSkill] = useState('');

    const handleNewSkillChange = (event) => {
        setNewSkill(event.target.value);
    };

    const addSkill = () => {
        if (newSkill.trim() !== '') {
            removeSkill(newSkill.trim());
            setNewSkill('');
        }
    };

    return (
        <div className='skills-container'>
            <h2>Edit skills</h2>
            <p>Add skills to build list of roles to price</p>

            <div className='skills-add-new-header'>
                <h3>Add new skill</h3>
            </div>
            
            <div className='input-field-skills-to-add'>
                <input
                    type="text"
                    value={newSkill}
                    onChange={handleNewSkillChange}
                    placeholder="e.g. Team building"
                />
                <div className='skills-add-button'>
                    <button onClick={addSkill}>Add</button>
                </div>
            </div>

            <div className='skills-suggested-header'>
                <h3>Suggested skills based on your career history</h3>
            </div>
            <div className='skills-suggested-button'>
                <button>Computer Science +</button>
                <button>Node.JS +</button>
                <button>Python Programming +</button>
                <button>C++ Programming +</button>
                <button>Unit Testing +</button>
            </div>

            <div className='skills-suggested-header'>
                <h3>Added skills</h3>
            </div>
            <div className='skills-added-button'>
                {
                    skills.map((skill) => (
                        <button key={skill} onClick={() => removeSkill(skill)}>
                            {skill} X
                        </button>
                    ))
                }
            </div>

            <div>
                <button>Save</button>
                <button>Cancel</button>
            </div>
        </div>
    );
};

export default EditSkills;
