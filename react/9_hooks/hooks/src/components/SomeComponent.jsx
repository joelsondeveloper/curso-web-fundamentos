import { forwardRef, useRef, useImperativeHandle, useState } from "react";

const SomeComponent = forwardRef((props, ref) => {
  const localInputRef = useRef();
  const [error, setError] = useState(false);

  useImperativeHandle(ref, () => ({
    validate: () => {
      if (localInputRef.current.value.length > 3) {
        setError(true);
        localInputRef.current.focus();
      } else {
        setError(false);
      }
    },
    clear: () => {
      localInputRef.current.value = "";
      setError(false);
    }
  }));

  return (
    <div>
      <p>Insira no máximo 3 caracteres</p>
      <input
        type="text"
        ref={localInputRef}
        className={error ? "error" : ""}
        onChange={() => {
          if (error && localInputRef.current.value.length <= 3) {
            setError(false);
          }
        }}
      />
      {error && <p className="error-message">Ops! Máximo de 3 caracteres.</p>}
    </div>
  );
});

export default SomeComponent;
