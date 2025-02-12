const Notification = ({ message, type }) => {
  if (!message) return null;

  const baseStyle = {
    fontSize: '20px',
    borderStyle: 'solid',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '10px'
  };

  const successStyle = { ...baseStyle, color: 'green', background: 'lightgrey' };
  const errorStyle = { ...baseStyle, color: 'red', background: 'lightpink' };

  return <div style={type === 'error' ? errorStyle : successStyle}>{message}</div>;
};

export default Notification;

  