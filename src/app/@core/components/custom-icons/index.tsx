const TrivIcon = (props :{ color: any }) => {
    const { color } = props
    let currentColor = color
    return (
        <svg width="100" height="33" viewBox="0 0 100 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.96739 1.13262C4.84805 2.11561 0 6.19842 0 13.4391C0 17.4655 1.38945 19.5186 2.06915 20.5016C2.44655 21.0612 12.8217 32.0403 12.9728 32.0403C12.9879 32.0403 14.0149 30.9816 15.2382 29.6812L17.4886 27.3372L12.6555 22.4676C8.30632 18.0818 6.79608 16.3313 6.79608 13.9684C6.79608 10.8114 9.36342 7.78669 13.2899 7.78669C15.7818 7.78669 17.7452 9.14806 18.8023 10.9626C19.5322 12.2155 19.8594 14.7431 18.6514 16.7094C18.2988 17.4152 17.2972 18.5735 15.646 20.184L17.881 22.4222L20.1163 24.6602L21.7473 22.9061C23.9823 20.5163 24.6317 19.5186 25.3568 17.3408C26.7762 13.1215 25.7191 8.38804 22.6079 5.09137C21.3696 3.7757 20.3275 3.00426 18.8176 2.24783C16.9296 1.2952 15.7214 1.00791 13.2899 0.962531C12.127 0.932496 10.1786 1.10226 9.96739 1.13262Z" fill={currentColor}/>
            <path d="M64.8873 10.0915V13.5625H64.389C62.8329 13.5625 60.1136 14.6447 57.9383 16.1174L56.5785 17.0491V30.9937H52.9529V10.1068H56.5785V12.9468L57.6059 12.361C59.6303 11.2039 61.8359 10.4526 64.102 10.1973L64.8873 10.0915ZM72.1388 10.1065V30.994H68.6641V10.1065H72.1388ZM40.1122 3.04412V10.1065H48.572V13.5628H40.0969L40.1423 19.0775L40.1877 24.6074C40.5404 25.4713 41.0688 26.1538 41.7738 26.6546C42.8313 27.4059 43.6784 27.3998 44.4174 27.4059C45.1424 27.416 45.802 27.1094 46.3964 26.4856L49.554 26.5044C49.5648 26.991 49.5148 27.4166 49.4028 27.7816C48.4208 30.8623 43.8008 31.876 40.4143 29.8856C38.7524 28.9088 37.1663 26.9553 36.713 24.6262V24.4916L36.7133 24.3774V24.3566L36.7136 24.2778V24.259L36.714 24.2045V24.1867L36.7143 24.1163V23.6858L36.7136 23.6268C36.711 23.0769 36.7006 21.9928 36.6679 19.1528L36.6072 13.5628H31.1992V10.1065H36.6376V3.04412H40.1122ZM79.7674 10.1253L83.6503 18.0258C85.7348 22.3532 87.4875 25.8849 87.5326 25.8849C87.5456 25.8849 87.7027 25.5871 87.9702 25.0586L88.0312 24.9376C88.7033 23.605 89.9805 21.0041 91.4151 18.0258L95.1769 10.1253H99.1045C97.5533 13.3286 95.8715 16.8035 94.059 20.5502L89.1341 30.8623H85.9615L80.946 20.4753L75.8398 10.1253H79.7674ZM69.329 1.22591C70.1297 0.865184 70.6888 0.865184 71.4896 1.25575C72.4262 1.70666 72.9549 2.63831 72.8644 3.70491C72.7887 4.66705 72.3504 5.34309 71.5346 5.74858C70.4622 6.28966 69.2235 6.04929 68.4682 5.16272C67.3497 3.82526 67.7576 1.93211 69.329 1.22591Z" fill={currentColor}/>
        </svg>

    )
}

const MoonIcon = (props :{ color: any }) => {
    const { color } = props
    let currentColor = color
    return (
        <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.9987 26.1673C20.442 26.1673 25.6654 20.9439 25.6654 14.5007C25.6654 13.9608 24.8563 13.8716 24.5771 14.3336C23.2491 16.5314 20.8371 18.0007 18.082 18.0007C13.8938 18.0007 10.4987 14.6055 10.4987 10.4173C10.4987 7.66218 11.968 5.25021 14.1658 3.9222C14.6278 3.64303 14.5385 2.83398 13.9987 2.83398C7.55537 2.83398 2.33203 8.05733 2.33203 14.5007C2.33203 20.9439 7.55537 26.1673 13.9987 26.1673Z" fill={currentColor}/>
            <circle cx="16" cy="8" r="1" fill={currentColor}/>
            <circle cx="19" cy="12" r="1" fill={currentColor}/>
            <circle cx="20" cy="8" r="1" fill={currentColor}/>
        </svg>
    )
}

const CaretUp = (props :{ color: any }) => {
    const { color } = props
    let currentColor = color
    return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 12L9 5L3 12L15 12Z" fill={currentColor}/>
        </svg>

    )
}

const CaretDown = (props :{ color: any }) => {
    const { color } = props
    let currentColor = color
    return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 6L9 13L15 6L3 6Z" fill={currentColor}/>
        </svg>
    )
}

export {
    TrivIcon,
    MoonIcon,
    CaretUp,
    CaretDown
}