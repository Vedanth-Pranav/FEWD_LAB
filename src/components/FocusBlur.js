import React, { useState } from 'react';

const FocusText = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="p-4">
      <p
        tabIndex={0}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={{
          outline: 'none',
          color: isFocused ? 'red' : 'black',
          cursor: 'pointer',
          transition: 'filter 0.3s ease',
          filter: isFocused ? 'none' : undefined,
        }}
        onMouseEnter={(e) => {
          if (!isFocused) e.currentTarget.style.filter = 'blur(1px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.filter = isFocused ? 'none' : 'blur(0px)';
        }}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
      >
        Click or tab to focus this text
      </p>
    </div>
  );
};

export default FocusText;
