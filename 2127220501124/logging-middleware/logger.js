const logger = (message) => {
  const log = {
    timestamp: new Date().toISOString(),
    message,
  };

  const logs = JSON.parse(localStorage.getItem('logs') || '[]');
  logs.push(log);
  localStorage.setItem('logs', JSON.stringify(logs));
};

export default logger;
