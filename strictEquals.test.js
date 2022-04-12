const strictEquals = (a, b) => {
  if (Object.is(a, NaN) && Object.is(NaN, b)) {
    return false;
  }
  else if (Object.is(0, a) && Object.is(-0, b)) {
    return true;
  }
  else if (Object.is(-0, a) && Object.is(0, b)) {
    return true;
  }
  return (Object.is(a, b))
}

describe("Given a strictEquals function", () => {
  describe("When it receives 1, 1", () => {
    test("Then it should return true", () => {
      // A-A-A
      // Arrange: monta el escenario/ recopila valores que vas a enviar o que esperas
      const a = 1;
      const b = 1;
      const expectedResult = true;
      // Act: haz que funcione la maquina
      const isItTrue = strictEquals(a, b);
      // Assert: comprueba que ha pasado lo que esperas que pase 
      expect(isItTrue).toBe(expectedResult);
    });
  });

  describe("When it receives NaN, NaN", () => {
    test("Then it should return false", () => {
      // A-A-A
      // Arrange: monta el escenario/ recopila valores que vas a enviar o que esperas
      const a = NaN;
      const b = NaN;
      const expectedResult = false;
      // Act: haz que funcione la maquina
      const isItTrue = strictEquals(a, b);
      // Assert: comprueba que ha pasado lo que esperas que pase 
      expect(isItTrue).toBe(expectedResult);
    });
  });

  describe("When it receives 0, -0", () => {
    test("Then it should return true", () => {
      // A-A-A
      // Arrange: monta el escenario/ recopila valores que vas a enviar o que esperas
      const a = 0;
      const b = -0;
      const expectedResult = true;
      // Act: haz que funcione la maquina
      const isItTrue = strictEquals(a, b);
      // Assert: comprueba que ha pasado lo que esperas que pase 
      expect(isItTrue).toBe(expectedResult);
    });
  });

  describe("When it receives -0, 0", () => {
    test("Then it should return true", () => {
      // A-A-A
      // Arrange: monta el escenario/ recopila valores que vas a enviar o que esperas
      const a = -0;
      const b = 0;
      const expectedResult = true;
      // Act: haz que funcione la maquina
      const isItTrue = strictEquals(a, b);
      // Assert: comprueba que ha pasado lo que esperas que pase 
      expect(isItTrue).toBe(expectedResult);
    });
  });

  describe("When it receives 1, '1'", () => {
    test("Then it should return false", () => {
      // A-A-A
      // Arrange: monta el escenario/ recopila valores que vas a enviar o que esperas
      const a = 1;
      const b = "1";
      const expectedResult = false;
      // Act: haz que funcione la maquina
      const isItTrue = strictEquals(a, b);
      // Assert: comprueba que ha pasado lo que esperas que pase 
      expect(isItTrue).toBe(expectedResult);
    });
  });

  describe("When it receives true, false", () => {
    test("Then it should return false", () => {
      // A-A-A
      // Arrange: monta el escenario/ recopila valores que vas a enviar o que esperas
      const a = true;
      const b = false;
      const expectedResult = false;
      // Act: haz que funcione la maquina
      const isItTrue = strictEquals(a, b);
      // Assert: comprueba que ha pasado lo que esperas que pase 
      expect(isItTrue).toBe(expectedResult);
    });
  });

  describe("When it receives false, false", () => {
    test("Then it should return true", () => {
      // A-A-A
      // Arrange: monta el escenario/ recopila valores que vas a enviar o que esperas
      const a = false;
      const b = false;
      const expectedResult = true;
      // Act: haz que funcione la maquina
      const isItTrue = strictEquals(a, b);
      // Assert: comprueba que ha pasado lo que esperas que pase 
      expect(isItTrue).toBe(expectedResult);
    });
  });

  describe("When it receives 'water', 'oil'", () => {
    test("Then it should return false", () => {
      // A-A-A
      // Arrange: monta el escenario/ recopila valores que vas a enviar o que esperas
      const a = "water";
      const b = "oil";
      const expectedResult = false;
      // Act: haz que funcione la maquina
      const isItTrue = strictEquals(a, b);
      // Assert: comprueba que ha pasado lo que esperas que pase 
      expect(isItTrue).toBe(expectedResult);
    });
  });
})

