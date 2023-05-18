import * as React from 'react'
import { createRef, useEffect } from 'react'
import './style.css'

export default function App() {
  const tmc = createRef<HTMLCanvasElement>()
  useEffect(() => {
    const h = 21
    const ctx = tmc.current.getContext('2d')
    ctx.font = `${h}px NotoSerif`
    let txt = ''
    txt +=
      'А ещё активно развивающиеся страны третьего мира, инициированные исключительно синтетически, призваны к ответу. Как уже неоднократно упомянуто, реплицированные с зарубежных источников, современные исследования, превозмогая сложившуюся непростую экономическую ситуацию, в равной степени предоставлены сами себе. С учётом сложившейся международной обстановки, внедрение современных методик представляет собой интересный эксперимент проверки распределения внутренних резервов и ресурсов. Прежде всего, существующая теория играет определяющее значение для экономической целесообразности принимаемых решений. А ещё интерактивные прототипы своевременно верифицированы. Значимость этих проблем настолько очевидна, что укрепление и развитие внутренней структуры, а также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для новых предложений. Как уже неоднократно упомянуто, предприниматели в сети интернет, вне зависимости от их уровня, должны быть призваны к ответу! Есть над чем задуматься: непосредственные участники технического прогресса будут своевременно верифицированы. В целом, конечно, убеждённость некоторых оппонентов представляет собой интересный эксперимент проверки как самодостаточных, так и внешне зависимых концептуальных решений. В целом, конечно, курс на социально-ориентированный национальный проект создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса распределения внутренних резервов и ресурсов. Мы вынуждены отталкиваться от того, что курс на социально-ориентированный национальный проект предполагает независимые способы реализации укрепления моральных ценностей. Не следует, однако, забывать, что начало повседневной работы по формированию позиции требует анализа экономической целесообразности принимаемых решений. Как принято считать, ключевые особенности структуры проекта объединены в целые кластеры себе подобных. Следует отметить, что постоянный количественный рост и сфера нашей активности влечет за собой процесс внедрения и модернизации новых предложений. Учитывая ключевые сценарии поведения, постоянное информационно-пропагандистское обеспечение нашей деятельности обеспечивает широкому кругу (специалистов) участие в формировании вывода текущих активов.'
    // txt +=
    //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nullam vehicula ipsum a arcu cursus. At tempor commodo ullamcorper a lacus vestibulum sed arcu. Sapien et ligula ullamcorper malesuada proin libero nunc consequat. Varius sit amet mattis vulputate enim. Semper feugiat nibh sed pulvinar proin. Suspendisse faucibus interdum posuere lorem ipsum. Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Vitae nunc sed velit dignissim sodales. Feugiat scelerisque varius morbi enim. Quisque sagittis purus sit amet.'
    // for (let i = 32; i <= 126; i++) {
    //   txt += String.fromCharCode(i)
    // }
    // for (let i = 1040; i <= 1103; i++) {
    //   txt += String.fromCharCode(i)
    // }
    const w = ctx.measureText(txt).width / txt.length
    console.log(txt)
    console.log(txt.length)
    console.log(ctx.measureText(txt).width)
    console.log(w)
    console.log(h / w)
    ctx.fillText(txt, 0, h)
    console.log('---')
    /////////////
    txt =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nullam vehicula ipsum a arcu cursus. At tempor commodo ullamcorper a lacus vestibulum sed arcu. Sapien et ligula ullamcorper malesuada proin libero nunc consequat. Varius sit amet mattis vulputate enim. Semper feugiat nibh sed pulvinar proin. Suspendisse faucibus interdum posuere lorem ipsum. Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Vitae nunc sed velit dignissim sodales. Feugiat scelerisque varius morbi enim. Quisque sagittis purus sit amet.'
    console.log((txt.length * h) / ctx.measureText(txt).width)

    txt = ''
    for (let i = 32; i <= 126; i++) {
      txt += String.fromCharCode(i)
    }
    console.log((txt.length * h) / ctx.measureText(txt).width)

    txt = ''
    for (let i = 1040; i <= 1103; i++) {
      txt += String.fromCharCode(i)
    }
    console.log((txt.length * h) / ctx.measureText(txt).width)
  }, [])
  return (
    <canvas
      style={{
        width: '100vw',
        height: '100vh',
        background: 'gold'
      }}
      ref={tmc}
    ></canvas>
  )
}
