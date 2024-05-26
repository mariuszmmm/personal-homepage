export const useTooltip = (setDemoIsHovered, setCodeIsHovered) => {
  let hoverDemoTimeout;
  let hoverCodeTimeout;

  const handleDemoMouseEnter = () => {
    hoverDemoTimeout = setTimeout(() => {
      setDemoIsHovered(true);
    }, 1000);
  };

  const handleCodeMouseEnter = () => {
    hoverCodeTimeout = setTimeout(() => {
      setCodeIsHovered(true);
    }, 1000);
  };

  const handleDemoMouseLeave = () => {
    clearTimeout(hoverDemoTimeout);

    setTimeout(() => {
      setDemoIsHovered(false);
    }, 1000);
  };

  const handleCodeMouseLeave = () => {
    clearTimeout(hoverCodeTimeout);

    setTimeout(() => {
      setCodeIsHovered(false);
    }, 1000);
  };

  return {
    handleDemoMouseEnter,
    handleCodeMouseEnter,
    handleDemoMouseLeave,
    handleCodeMouseLeave,
  };
};
