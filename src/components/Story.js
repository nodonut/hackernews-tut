import React, { useState, useEffect } from 'react';
import { getStory } from '../services/hnApi';

export const Story = ({ storyId }) => {
  useEffect(() => {}, []);

  return <p>I am a story{JSON.stringify(storyId)}</p>;
};
