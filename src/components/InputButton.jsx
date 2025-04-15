export function InputButton(props) {

  function handleMudarNotaAvaliacao(nota) {
    console.log(nota);
    props.setNotaAvaliacao(nota);
  }

  return (
    <input
      type="button"
      value={props.value}
      className="bg-dark-blue w-10.5 h-10.5 rounded-full text-medium-grey text-sm font-bold focus:bg-medium-grey focus:text-white sm:w-13 sm:h-13 hover:bg-orange hover:text-white hover:cursor-pointer duration-500"
      onClick={() => handleMudarNotaAvaliacao(props.value)}
    />

  );
}
