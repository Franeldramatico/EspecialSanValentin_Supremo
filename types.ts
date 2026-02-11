export enum GameScreenState {
  INTRO = 'INTRO',
  NAME_INPUT = 'NAME_INPUT',
  GAME_LOOP = 'GAME_LOOP',
  ENDING = 'ENDING'
}

// Renamed from SoobinEmotion, now for Francisco
export enum FranciscoEmotion {
  PRESENTATION = 'presentation',
  GALAN = 'galan',
  ORGULLOSO = 'orgulloso',
  SARCASMO = 'sarcasmo',
  FELIZ = 'feliz',
  FINGIDA_INDIFERENCIA = 'fingida_indiferencia',
  SORPRENDIDO = 'sorprendido',
  CONFUNDIDO = 'confundido',
  SONROJADO = 'sonrojado',
  TIMIDEZ = 'timidez',
  ENOJADO = 'enojado',
  SUPER_ENOJADO = 'super_enojado',
  DECEPCIONADO = 'decepcionado',
}

export interface Choice {
  text: string;
  nextStepId: string;
}

export interface GameStepData {
  id: string;
  narrative?: string;
  dialogue: string;
  emotion: FranciscoEmotion;
  choices: Choice[];
  isEnding: boolean;
  endingTitle?: string;
}