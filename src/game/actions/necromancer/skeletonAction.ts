import {SummonAction} from '../summonAction';
import {IUnit} from '../../../models/unit';
import {Skeleton} from '../../characters/summons/necromancer/skeleton';
import {ICharacter} from '../../../models/character';

export class SkeletonAction extends SummonAction {
    constructor(actor: ICharacter) {
        super(actor, 'Skeleton', 'skeleton', Skeleton, 10);
    }
}