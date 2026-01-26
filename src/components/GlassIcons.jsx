import './GlassIcons.css';
import { useState } from 'react';
import TextType from './TextType';

const gradientMapping = {
  blue: 'linear-gradient(hsl(223, 90%, 50%), hsl(208, 90%, 50%))',
  purple: 'linear-gradient(hsl(283, 90%, 50%), hsl(268, 90%, 50%))',
  red: 'linear-gradient(hsl(3, 90%, 50%), hsl(348, 90%, 50%))',
  indigo: 'linear-gradient(hsl(253, 90%, 50%), hsl(238, 90%, 50%))',
  orange: 'linear-gradient(hsl(43, 90%, 50%), hsl(28, 90%, 50%))',
  green: 'linear-gradient(hsl(123, 90%, 40%), hsl(108, 90%, 40%))'
};

const GlassIcons = ({ items, className }) => {
  const getBackgroundStyle = color => {
    if (gradientMapping[color]) {
      return { background: gradientMapping[color] };
    }
    return { background: color };
  };

  const [hovered, setHovered] = useState(null)

  return (
    <div className={`icon-btns ${className || ''}`}>
      {items.map((item, index) => {
        const content = (
          <>
            <span className="icon-btn__back" style={getBackgroundStyle(item.color)}></span>
            <span className="icon-btn__front">
              <span className="icon-btn__icon" aria-hidden="true">
                {item.icon}
              </span>
            </span>
            <span className="icon-btn__label">
              {hovered === index ? (
                <TextType
                  texts={item.texts || item.tooltipTexts || [item.label]}
                  typingSpeed={item.typingSpeed ?? 75}
                  pauseDuration={item.pauseDuration ?? 1500}
                  showCursor={item.showCursor ?? true}
                  cursorCharacter={item.cursorCharacter ?? '_'}
                  deletingSpeed={item.deletingSpeed ?? 50}
                  variableSpeedEnabled={item.variableSpeedEnabled ?? false}
                  variableSpeedMin={item.variableSpeedMin ?? 60}
                  variableSpeedMax={item.variableSpeedMax ?? 120}
                  cursorBlinkDuration={item.cursorBlinkDuration ?? 0.5}
                />
              ) : (
                item.label
              )}
            </span>
          </>
        );

        const commonProps = {
          key: index,
          className: `icon-btn ${item.customClass || ''}`,
          'aria-label': item.label,
          onMouseEnter: () => setHovered(index),
          onMouseLeave: () => setHovered(null)
        }

        if (item.href) {
          return (
            <a
              {...commonProps}
              href={item.href}
              target={item.target || '_blank'}
              rel={item.rel || 'noopener noreferrer'}
            >
              {content}
            </a>
          )
        }

        return (
          <button {...commonProps} type="button">
            {content}
          </button>
        )
      })}
    </div>
  );
};

export default GlassIcons;
