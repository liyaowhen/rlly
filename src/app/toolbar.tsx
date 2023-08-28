'use client';

import ButtonGroup from '@/components/ButtonGroup';
import SplitLayout from '@/components/SplitLayout';
import { useState } from 'react';

export default function ToolBar() {
  let [active, setActive] = useState(0);
  let [previous, setPrevious] = useState(-1);
  let buttons: string[] = ['transform', 'brush', 'fill', 'text']
  return (
    <>
      <ButtonGroup active={active} setActive={setActive} previous={previous} setPrevious={setPrevious} buttons={buttons} />
      <SplitLayout left="hello" center={<em>hi</em>} right="hello" />
    </>
  )
}


