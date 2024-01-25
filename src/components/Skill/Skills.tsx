import React from 'react';
import { Skill } from "../../interfaces/Skill/Skill";

interface SkillsProp {
    skills: Skill;
}

const Skills: React.FC<SkillsProp> = ({ skills }) => {
    return (
        <div className="skills">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {
                    skills.map((skill, index) => (
                        <div key={index} className="bg-gray-200 p-4 rounded-md">
                            <h3 className="text-lg font-semibold mb-1">{skill.name}</h3>
                        {
                            skill.description && <p className="text-gray-600">{skill.description}</p>
                        }
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Skills;