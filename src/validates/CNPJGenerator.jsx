import React, { useState, useRef } from "react";

const CNPJGenerator = () => {
  const [cnpj, setCnpj] = useState("");
  const [copied, setCopied] = useState(false);
  const [includeMask, setIncludeMask] = useState(true);
  const cnpjRef = useRef(null);

  const generateRandomCNPJ = () => {
    let cnpj = "";
    for (let i = 0; i < 12; i++) {
      cnpj += Math.floor(Math.random() * 10);
    }
    cnpj += calculateCNPJCheckDigits(cnpj);
    setCopied(false);
    return cnpj;
  };

  const calculateCNPJCheckDigits = (cnpj) => {
    const digits = cnpj.split("").map(Number);
    let sum = 0;
    let factor = 5;

    // Calcula o primeiro dígito verificador
    for (let i = 0; i < 12; i++) {
      sum += digits[i] * factor;
      factor = factor === 2 ? 9 : factor - 1;
    }

    let remainder = sum % 11;
    digits[12] = remainder < 2 ? 0 : 11 - remainder;

    sum = 0;
    factor = 6;

    // Calcula o segundo dígito verificador
    for (let i = 0; i < 13; i++) {
      sum += digits[i] * factor;
      factor = factor === 2 ? 9 : factor - 1;
    }

    remainder = sum % 11;
    digits[13] = remainder < 2 ? 0 : 11 - remainder;

    return digits.slice(12, 14).join("");
  };

  const formatCNPJ = (cnpj) => {
    const formattedCNPJ = cnpj.toString().padStart(14, "0");
    return `${formattedCNPJ.substr(0, 2)}.${formattedCNPJ.substr(
      2,
      3
    )}.${formattedCNPJ.substr(5, 3)}/${formattedCNPJ.substr(
      8,
      4
    )}-${formattedCNPJ.substr(12, 2)}`;
  };

  const copyCNPJ = () => {
    const cnpjElement = cnpjRef.current;
    cnpjElement.select();
    document.execCommand("copy");
    setCopied(true);
  };

  const toggleIncludeMask = () => {
    setIncludeMask(!includeMask);
  };

  return (
    <div className="CNPJGenerator">
      <h1>CNPJ</h1>
      <input
        type="text"
        value={includeMask ? formatCNPJ(cnpj) : cnpj}
        readOnly
        ref={cnpjRef}
      />
      <button onClick={() => setCnpj(generateRandomCNPJ())}>
        Gerar CNPJ
      </button>
      <button onClick={copyCNPJ}>Copiar CNPJ</button>
      <label>
        <input
          type="checkbox"
          checked={includeMask}
          onChange={toggleIncludeMask}
        />
        Incluir máscara
      </label>
      {copied && <p>CNPJ copiado!</p>}
    </div>
  );
};

export default CNPJGenerator;
