export const useTooltip = (setDemoIsHovered, setCodeIsHovered) => {
  let hoverDemoTimeout;
  let hoverCodeTimeout;

  const handleDemoMouseEnter = () => {
    hoverDemoTimeout = setTimeout(() => {
      setDemoIsHovered(true);
    }, 1000);

    setTimeout(() => {
      setDemoIsHovered(false);
    }, 5000);
  };

  const handleCodeMouseEnter = () => {
    hoverCodeTimeout = setTimeout(() => {
      setCodeIsHovered(true);
    }, 1000);

    setTimeout(() => {
      setCodeIsHovered(false);
    }, 5000);
  };

  const handleDemoMouseLeave = () => {
    clearTimeout(hoverDemoTimeout);

    setTimeout(() => {
      setDemoIsHovered(false);
    }, 500);
  };

  const handleCodeMouseLeave = () => {
    clearTimeout(hoverCodeTimeout);

    setTimeout(() => {
      setCodeIsHovered(false);
    }, 500);
  };

  return {
    handleDemoMouseEnter,
    handleCodeMouseEnter,
    handleDemoMouseLeave,
    handleCodeMouseLeave,
  };
};
