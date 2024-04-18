import React from 'react'
import { useAppDispatch, useAppSelector } from '@store/hooks'
import {
    selectCount,
    decrement,
    increment,
    reset,
    lang,
} from '@redux-slices/counter.slice'
import { ECounterEventType } from '@enums/ECounterEventType'
import { useTranslation } from 'react-i18next'
import styles from './styles.module.scss'

const CounterComponent = () => {
    const { t }: any = useTranslation()
    const dispatch: any = useAppDispatch()
    const value: number = useAppSelector(selectCount)
    const handleAction = (action: ECounterEventType) => {
        switch (action) {
            case ECounterEventType.DECREMENT:
                dispatch(decrement())
                break
            case ECounterEventType.INCREMENT:
                dispatch(increment())
                break
            case ECounterEventType.RESET:
                dispatch(reset())
                break
            case ECounterEventType.LANG:
                dispatch(lang('ar'))
                break
        }
    }
    return (
        <div className={styles.counterContainer}>
            <div className={styles.counterWrapper}>
                <h2>
                    Counter: <label>{value}</label>
                </h2>
                <div className={styles.btnsWrapper}>
                    <button
                        onClick={() =>
                            handleAction(ECounterEventType.INCREMENT)
                        }
                    >
                        +
                    </button>
                    <button
                        onClick={() => handleAction(ECounterEventType.LANG)}
                    >
                        +
                    </button>
                    <button
                        onClick={() =>
                            handleAction(ECounterEventType.DECREMENT)
                        }
                    >
                        -
                    </button>
                    <button
                        onClick={() => handleAction(ECounterEventType.RESET)}
                    >
                        {t('resetLabel')}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CounterComponent
