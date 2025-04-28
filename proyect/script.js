function guardarElementos(elementos) {
    localStorage.setItem('elementosEscalada', JSON.stringify(elementos));
  }
  
  function cargarElementos() {
    const elementosGuardados = localStorage.getItem('elementosEscalada');
    return elementosGuardados ? JSON.parse(elementosGuardados) : [];
  }
  

  let elementos = cargarElementos();
  if (elementos.length === 0) {
    elementos = [
      { nombre: "E1", peso: 5, calorias: 3 },
      { nombre: "E2", peso: 3, calorias: 5 },
      { nombre: "E3", peso: 5, calorias: 2 },
      { nombre: "E4", peso: 1, calorias: 8 },
      { nombre: "E5", peso: 2, calorias: 3 }
    ];
    guardarElementos(elementos);
  }
  

  function encontrarElementos(minCalorias, maxPeso) {
    let combinaciones = generarCombinaciones(elementos);
    let mejoresOpciones = [];
  
    for (let combinacion of combinaciones) {
      let pesoTotal = combinacion.reduce((acc, el) => acc + el.peso, 0);
      let caloriasTotal = combinacion.reduce((acc, el) => acc + el.calorias, 0);
  
      if (pesoTotal <= maxPeso && caloriasTotal >= minCalorias) {
        mejoresOpciones.push({ elementos: combinacion, pesoTotal, caloriasTotal });
      }
    }
  
    mejoresOpciones.sort((a, b) => a.pesoTotal - b.pesoTotal);
  
    return mejoresOpciones.length > 0 ? mejoresOpciones[0] : null;
  }
  

  function generarCombinaciones(arr) {
    const resultados = [];
  
    const generar = (subset, index) => {
      if (index === arr.length) {
        resultados.push(subset);
        return;
      }
      generar([...subset, arr[index]], index + 1);
      generar(subset, index + 1);
    };
  
    generar([], 0);
    return resultados;
  }
  

  function agregarElemento(nombre, peso, calorias) {
    elementos.push({ nombre, peso, calorias });
    guardarElementos(elementos);
  }

  
  function resetearElementos() {
    if (confirm('¿Seguro que quieres borrar todos los elementos?')) {
      localStorage.removeItem('elementosEscalada');
      location.reload();
    }
  }