onEvent(`recipes`, e => {
  //#region FUNCTIONS
  //Soils
  function makeFarmland(input, name, categories, growthModifier) {
    e.recipes.botanypots.soil({
      input: {
        item: input
      },
      display: {
        block: input,
        properties: {
          moisture: 7
        }
      },
      categories: categories,
      growthModifier: growthModifier
    }).id(`kubejs:botany_pots/soil/${name}`)
  }
  function makeSoil(input, name, categories, growthModifier) {
    e.recipes.botanypots.soil({
      input: {
        item: input
      },
      display: {
        block: input
      },
      categories: categories,
      growthModifier: growthModifier
    }).id(`kubejs:botany_pots/soil/${name}`)
  }
  //Crops
  function tier(types, time, soil) {
    types.forEach(type => {
      let rItem = `mysticalagriculture:${type}_essence`
      let inItem = `mysticalagriculture:${type}_seeds`
      let renBlock = `mysticalagriculture:${type}_crop`

      e.remove({
        id: `mysticalagriculture:crops/${type}`
      })

      e.recipes.botanypots.crop({
        seed: Ingredient.of(inItem).toJson(),
        categories: [soil],
        growthTicks: time,
        display: {
          block: renBlock,
          properties: {
            age: 7
          }
        },
        results: [{
          chance: 0.75,
          output: Item.of(rItem).toResultJson(),
          minRolls: 1,
          maxRolls: 3
        },
        {
          chance: 0.05,
          output: Item.of(inItem).toResultJson(),
          minRolls: 1,
          maxRolls: 1
        },
        {
          chance: 0.01,
          output: Item.of(`mysticalagriculture:fertilized_essence`).toResultJson(),
          minRolls: 1,
          maxRolls: 1
        }
        ]
      }).id(`kubejs:botany_pots/crop/mystical_agriculture/${type}`)
    })
  }
  //#endregion

  makeFarmland(`mysticalagradditions:insanium_farmland`, `insanium_farmland`, [`dirt`, `farmland`, `inferium`, `prudentium`, `tertium`, `imperium`, `supremium`, `insanium`], 0.50)
  makeSoil(`kubejs:magical_soil`, `magical_soil`, [`dirt`, `farmland`, `inferium`, `prudentium`, `tertium`, `imperium`, `supremium`, `insanium`, `magical`], 0.75)

  //#region CROPS
  tier([`inferium`,`air`,`earth`,`fire`,`water`,`dirt`,`wood`,`ice`,`stone`], 1000, `inferium`)
  tier([`aluminum`,`chicken`,`coal`,`copper`,`coral`,`cow`,`dye`,`fish`,`honey`,`iridium`,`mystical_flower`,`nature`,`nether`,`pig`,`rubber`,`saltpeter`,`sheep`,`silicon`,`slime`,`squid`,`sulfur`,`turtle`,`sky_stone`,`apatite`], 1750, `prudentium`)
  tier([`azure_silver`,`brass`,`bronze`,`certus_quartz`,`creeper`,`crimson_iron`,`ender_biotite`,`glowstone`,`graphite`,`iron`,`lead`,`manasteel`,`nether_quartz`,`obsidian`,`prismarine`,`quartz_enriched_iron`,`rabbit`,`redstone`,`silver`,`skeleton`,`spider`,`tin`,`zinc`,`zombie`,`lumium`,`fluorite`,`tinkers_bronze`,`slimesteel`,`pig_iron`,`steeleaf`,`ironwood`], 2500, `tertium`)
  tier([`azure_electrum`,`blaze`,`chrome`,`constantan`,`crimson_steel`,`electrum`,`elementium`,`end`,`enderman`,`experience`,`fluix`,`ghast`,`gold`,`invar`,`lapis_lazuli`,`mithril`,`nickel`,`oratchalcum`,`osmium`,`refined_glowstone`,`refined_obsidian`,`steel`,`titanium`,`tungsten`,`enderium`,`compressed_iron`,`hop_graphite`,`cobalt`,`rose_gold`,`knightmetal`,`fiery_ingot`], 3250, `imperium`)
  tier([`diamond`,`emerald`,`netherite`,`terrasteel`,`uraninite`,`wither_skeleton`,`platinum`,`uranium`,`manyullyn`,`queens_slime`,`hepatizon`], 4000, `supremium`)
  tier([`dragon_egg`,`nether_star`,`nitro_crystal`,], 4750, `insanium`)
  tier([`allthemodium`,`vibranium`,`unobtainium`], 5500, `magical`)

  //Ars Nouveau Mana Bloom
  e.recipes.botanypots.crop([
    Item.of(`ars_nouveau:mana_bloom`).chance(0.75),
    {
      item: Item.of(`ars_nouveau:mana_bloom_crop`).chance(0.05),
      maxRolls: 2
    }
  ], `ars_nouveau:mana_bloom_crop`).categories([`dirt`])
  //#endregion
})
