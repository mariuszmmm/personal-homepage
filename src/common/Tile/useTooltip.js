export const useTooltip = (setDemoIsHovered, setCodeIsHovered) => {
  let hoverDemoTimeout;
  let hoverCodeTimeout;

  const handleDemoMouseEnter = () => {
    hoverDemoTimeout = setTimeout(() => {
      setDemoIsHovered(true);
    }, 500);
  };

  const handleCodeMouseEnter = () => {
    hoverCodeTimeout = setTimeout(() => {
      setCodeIsHovered(true);
    }, 500);
  };

  const handleDemoMouseLeave = () => {
    clearTimeout(hoverDemoTimeout);

    setTimeout(() => {
      setDemoIsHovered(false);
    }, 100);
  };

  const handleCodeMouseLeave = () => {
    clearTimeout(hoverCodeTimeout);

    setTimeout(() => {
      setCodeIsHovered(false);
    }, 100);
  };

  return {
    handleDemoMouseEnter,
    handleCodeMouseEnter,
    handleDemoMouseLeave,
    handleCodeMouseLeave,
  };
};
