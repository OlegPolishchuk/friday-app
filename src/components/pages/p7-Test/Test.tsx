import React, {useState} from 'react'
import SuperInputText from '../../common/SuperInputText/SuperInputText'
import SuperButton from '../../common/SuperButton/SuperButton'
import SuperCheckbox from '../../common/SuperCheckbox/SuperCheckbox'
import SuperEditableSpan from '../../common/SuperEditableSpan/SuperEditableSpan'
import SuperSelect from '../../common/SuperSelect/SuperSelect'
import SuperRadio from '../../common/SuperRadio/SuperRadio'
import s from './Text.module.css'


export const Test = () => {
    const arr = ['x', 'y', 'z']
    const [editableSpanText, setEditableSpanText] = useState<string>('Hello')
    const [optionValue, onChangeOption] = useState<string>(arr[1])


    return (
        <div className={s.container + ' container'}>
            <div>
                <SuperInputText/>
            </div>
            <div>
                <SuperButton>
                    Hello
                </SuperButton>
            </div>
            <div>
                <SuperCheckbox/>
            </div>
            <div>
                <SuperEditableSpan value={editableSpanText}
                                   onChangeText={setEditableSpanText}/>
            </div>
            <div>
                <SuperSelect options={arr}
                             value={optionValue}
                             onChangeOption={onChangeOption}/>
            </div>
            <div>
                <SuperRadio name={'radio'}
                            options={arr}
                            value={optionValue}
                            onChangeOption={onChangeOption}/>
            </div>
        </div>
    )
}