export const useTooltip = (setState) => {
  let demoTimeout;
  let codeTimeout;

  const handleDemoMouseEnter = () => {
    demoTimeout = setTimeout(() => {
      setState((state) => ({ ...state, isDemoLinkHovered: true }));
    }, 500);
  };

  const handleCodeMouseEnter = () => {
    codeTimeout = setTimeout(() => {
      setState((state) => ({ ...state, isCodeLinkHovered: true }));
    }, 500);
  };

  const handleDemoMouseLeave = () => {
    clearTimeout(demoTimeout);
    setTimeout(() => {
      setState((state) => ({ ...state, isDemoLinkHovered: false }));
    }, 200);
  };

  const handleCodeMouseLeave = () => {
    clearTimeout(codeTimeout);
    setTimeout(() => {
      setState((state) => ({ ...state, isCodeLinkHovered: false }));
    }, 200);
  };

  return {
    handleDemoMouseEnter,
    handleCodeMouseEnter,
    handleDemoMouseLeave,
    handleCodeMouseLeave,
  };
};
