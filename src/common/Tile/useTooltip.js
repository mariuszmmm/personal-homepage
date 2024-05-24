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
    clearInterval(hoverDemoTimeout);
    setDemoIsHovered(false);
  };

  const handleCodeMouseLeave = () => {
    clearInterval(hoverCodeTimeout);
    setCodeIsHovered(false);
  };

  return {
    handleDemoMouseEnter,
    handleCodeMouseEnter,
    handleDemoMouseLeave,
    handleCodeMouseLeave,
  };
};
