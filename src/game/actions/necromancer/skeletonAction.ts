import {SummonAction} from '../summonAction';
import {IUnit} from '../../../models/unit';
import {Skeleton} from '../../characters/summons/necromancer/skeleton';

export class SkeletonAction extends SummonAction {
    constructor(actor: IUnit) {
        super(actor, 'Skeleton', 'skeleton', Skeleton);
    }
}