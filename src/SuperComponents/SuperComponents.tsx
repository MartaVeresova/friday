import React, {ChangeEvent, useState} from 'react'
import {SuperInputText} from './common/c1-SuperInputText/SuperInputText'
import s from './SuperComponents.module.css'
import {SuperButton} from './common/c2-SuperButton/SuperButton'
import {SuperCheckbox} from './common/c3-SuperCheckbox/SuperCheckbox'
import {SuperEditableSpan} from './common/c4-SuperEditableSpan/SuperEditableSpan';
import {SuperSelect} from './common/c5-SuperSelect/SuperSelect'
import {SuperRadio} from './common/c6-SuperRadio/SuperRadio'

const arr = ['x', 'y', 'z']

export const SuperComponents = () => {
    const [text, setText] = useState<string>('')
    const error = text ? '' : 'error'

    const showAlert = () => {
        if (error) {
            alert('введите текст...')
        } else {
            alert(text)
        }
    }

    const [checked, setChecked] = useState<boolean>(false)
    const testOnChange = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked)

    const [valueSpan, setValueSpan] = useState<string>('')

    const [valueSelectAndRadio, onChangeOption] = useState(arr[0])


    return (
        <div>
            <div className={s.column}>

                <SuperInputText
                    value={text}
                    onChangeText={setText}
                    onEnter={showAlert}
                    error={error}
                    //spanClassName={s.testSpanError}
                />

                <SuperInputText
                    //className={s.blue} // смешивание классов
                />
                {/*----------------------------------------------------*/}

                <SuperButton>
                    default
                </SuperButton>

                <SuperButton
                    red // пропсу с булевым значением не обязательно указывать true
                    onClick={showAlert}
                >
                    delete {/*// название кнопки попадёт в children*/}
                </SuperButton>

                <SuperButton disabled>
                    disabled
                </SuperButton>

                {/*----------------------------------------------------*/}

                <SuperCheckbox
                    checked={checked}
                    onChangeChecked={setChecked}
                >
                    some text {/*// этот текст попадёт в children*/}
                </SuperCheckbox>

                <SuperCheckbox checked={checked} onChange={testOnChange}/>

                <div>
                    <SuperEditableSpan
                        value={valueSpan}
                        onChangeText={setValueSpan}
                        spanProps={{children: valueSpan ? undefined : '🖊️ enter text...'}}
                    />
                </div>

                <div>
                    <SuperSelect
                        options={arr}
                        value={valueSelectAndRadio}
                        onChangeOption={onChangeOption}
                    />
                </div>

                <div>
                    <SuperRadio
                        name={'radio'}
                        options={arr}
                        value={valueSelectAndRadio}
                        onChangeOption={onChangeOption}
                    />
                </div>

            </div>
        </div>
    )
}