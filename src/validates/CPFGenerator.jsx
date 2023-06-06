import React, { useState, useRef } from "react";

const CPFGenerator = () => {
  const [cpf, setCpf] = useState("");
  const [copied, setCopied] = useState(false);
  const [includeMask, setIncludeMask] = useState(true);
  const cpfRef = useRef(null);

  const generateCPF = () => {
    const randomCPF = generateRandomCPF();
    setCpf(formatCPF(randomCPF));
  };

  const generateRandomCPF = () => {
    let cpf = "";
    for (let i = 0; i < 9; i++) {
      cpf += Math.floor(Math.random() * 10);
    }
    cpf += calculateCPFCheckDigits(cpf);
    setCopied(false);
    return cpf;
  };

  const calculateCPFCheckDigits = (cpf) => {
    const digits = cpf.split("").map(Number);
    let sum = 0;
    let factor = 10;

    for (let i = 0; i < 9; i++) {
      sum += digits[i] * factor;
      factor--;
    }

    let remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) {
      remainder = 0;
    }

    digits[9] = remainder;
    sum = 0;
    factor = 11;

    for (let i = 0; i < 10; i++) {
      sum += digits[i] * factor;
      factor--;
    }

    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) {
      remainder = 0;
    }

    digits[10] = remainder;
    return digits.slice(9, 11).join("");
  };

  const formatCPF = (value) => {
    if (includeMask) {
      const formattedCPF = value.toString().padStart(11, "0");
      return `${formattedCPF.substr(0, 3)}.${formattedCPF.substr(
        3,
        3
      )}.${formattedCPF.substr(6, 3)}-${formattedCPF.substr(9, 2)}`;
    } else {
      return parseInt(value, 10);
    }
  };

  const copyCPF = () => {
    const cpfElement = cpfRef.current;
    cpfElement.select();
    document.execCommand("copy");
    setCopied(true);
  };

  const toggleIncludeMask = () => {
    setIncludeMask(!includeMask);
  };

  return (
    <div>
      <h1>CPF</h1>
      <input
        type="text"
        value={includeMask ? cpf : formatCPF(cpf)}
        readOnly
        ref={cpfRef}
      />{" "}
      <br />
      <button onClick={generateCPF}>Gerar CPF</button>
      <button onClick={copyCPF}>Copiar CPF</button>
      <label>
        <input
          type="checkbox"
          checked={includeMask}
          onChange={toggleIncludeMask}
        />
        Incluir máscara
      </label>
      {copied && <p>CPF copiado!</p>}
    </div>
  );
};

export default CPFGenerator;
