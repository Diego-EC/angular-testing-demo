import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let calculatorService: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    calculatorService = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(calculatorService).toBeTruthy();
  });

  it("should add two numbers", () => {
    const result = calculatorService.add(2, 2);
    expect(result).toBe(4);
  });

  it("should substract two numbers", () => {
    //pending();
    const result = calculatorService.substract(2, 2);
    expect(result).toBe(0);
  });
});
