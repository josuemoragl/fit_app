import {atom} from 'jotai';

import {Pokemon} from '../../entities/pokemon_entity';

const selectedPokemonAtom = atom<Pokemon | undefined>(undefined);

export default selectedPokemonAtom;
