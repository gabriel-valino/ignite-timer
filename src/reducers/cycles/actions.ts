import { Cycle } from './reducer'

export enum ActionTypes {
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
  MARK_CURRENT_CYCLE_AS_FINISHED = 'MARK_CURRENT_CYCLE_AS_FINISHED',
  INTERRUPT_CURRENT_CYCLE = 'INTERRUPT_CURRENT_CYCLE',
}

// Defina os tipos de ações
interface AddNewCycleAction {
  type: ActionTypes.ADD_NEW_CYCLE
  payload: {
    newCycle: Cycle
  }
}

interface InterruptCurrentCycleAction {
  type: ActionTypes.INTERRUPT_CURRENT_CYCLE
}

interface MarkCurrentCycleAsFinishedAction {
  type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED
}

// Crie um tipo unindo todas as ações
export type CycleAction =
  | AddNewCycleAction
  | InterruptCurrentCycleAction
  | MarkCurrentCycleAsFinishedAction

export function addNewCycleAction(newCycle: Cycle): AddNewCycleAction {
  return {
    type: ActionTypes.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    },
  }
}

export function markCurrentCycleAsFinishedAction(): MarkCurrentCycleAsFinishedAction {
  return {
    type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
  }
}
export function interruptCurrentCycleAction(): InterruptCurrentCycleAction {
  return {
    type: ActionTypes.INTERRUPT_CURRENT_CYCLE,
  }
}
