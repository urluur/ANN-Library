export class Perceptron {

  private learningRate: number = 0.05;
  private bias: number;
  private weights: number[];
  private activationFunction: (x: number) => number;
  private lossFunction: (pred: number, goal: number) => number;

  constructor(inputLength: number) {
    this.bias = Math.random() * 2 - 1; // random number between -1 and 1
    this.weights = [];
    for (let i = 0; i < inputLength; i++) {
      this.weights.push(Math.random() * 2 - 1);
    }
    this.activationFunction = ActivationFunction.sign; // it would be better if the user could decide the activation function
    this.lossFunction = LossFunction.absoluteError; // it would be better if the user could decide the loss function
  }

  public predictOne(input: number[]): number {
    const weightedSum = this.weightedSum(input);
    return this.activationFunction(weightedSum);
  }

  public fitOne(input: number[], label: number): number {
    const prediction = this.predictOne(input);
    const error = this.lossFunction(prediction, label);
    this.adjustWeights(input, error);
    return error;
  }

  private adjustWeights(input: number[], error: number): void {
    this.bias += (1 * error * this.learningRate);
    for (let i = 0; i < this.weights.length; i++) {
      this.weights[i] += (error * input[i] * this.learningRate);
    }
  }
  private weightedSum(input: number[]): number {
    let sum = (1 * this.bias);
    for (let i = 0; i < input.length; i++) {
      sum += input[i] * this.weights[i];
    }
    return sum;
  }

}

export class ActivationFunction {
  static sign = (sum: number): number => {
    if (sum >= 0) {
      return 1;
    }
    else {
      return -1;
    }
  }

  // later you can add more activation functions here

}

export class LossFunction {
  static absoluteError = (pred: number, goal: number): number => {
    return goal - pred;
  }
  // later you can add more loss functions here
}