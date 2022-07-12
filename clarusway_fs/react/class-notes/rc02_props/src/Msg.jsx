const Msg = (props) => {
  // console.log(props);

  //! Destructiring
  const { name } = props;
  const imgStyle = {
    color: "blue",
    marginBottom: 0,
    textAlign: "center",
  };

  return (
    <div>
      <h3 style={imgStyle}>Merhaba {name}</h3>
    </div>
  );
};

export default Msg;
