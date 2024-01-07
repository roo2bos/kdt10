function ExAllResult({ data }) {
  const { fruit, bgc, colorText, content } = data;
  return (
    <div>
      <img src={`${fruit}.jpeg`} alt={fruit} width="100" />
      <p
        style={{
          backgroundColor: bgc,
          color: colorText,
          textShadow:
            'rgb(255, 255, 255) 1px 1px 0, rgb(255, 255, 255) -1px -1px 0,rgb(255, 255, 255) -1px 1px 0,rgb(255, 255, 255) 1px -1px 0',
          padding: '10px',
          fontSize: '2rem',
          fontWeight: 'bold',
        }}
      >
        {content}
      </p>
    </div>
  );
}
export default ExAllResult;
