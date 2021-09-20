onEvent('item.registry', e => {
  e.create('mass_of_wills').displayName('§6Mass of Wills').tooltip('§8Combination of the six wills of the ancients').unstackable()
  e.create('rune_of_sins').displayName('§6Rune of Sins').tooltip('§8Rune that contains the power of the seven sins').unstackable()
  e.create('uu_matter').displayName('§dUU-Matter')
  e.create('patrick_star').displayName('§dPatrick Star')
  e.create('saltpeter_ingot').displayName('Nitrate Ingot')
  e.create('potassium_nitrate_dust').displayName('Potassium Nitrate Dust')
  e.create('potassium_nitrate_ingot').displayName('Potassium Nitrate Ingot')
  e.create('potassium_dust').displayName('Potassium Dust')
  e.create('potassium_ingot').displayName('Potassium Ingot')
  e.create('uru_ingot').displayName('§6Uru Metal Ingot')
  e.create('uru_nugget').displayName('§6Uru Metal Ingot')
})

onEvent('block.registry', e => {
  e.create('magical_soil').displayName('§bMagical Soil').material('grass').hardness(0.6)
  e.create('saltpeter_block').displayName('Nitrate Block').material('metal')
  e.create('potassium_block').displayName('Potassium Block').material('metal')
  e.create('potassium_nitrate_block').displayName('Potassium Nitrate Block').material('metal')
  e.create('uru_block').displayName('§6Uru Metal Block').material('metal')
  e.create('atm_star_block').displayName('§eATM Star Block').material('iron').hardness(5).lightLevel(1)
  e.create('yellow_cake_uranium_block').displayName('§eYellow Cake Uranium Block').material('sand')
})