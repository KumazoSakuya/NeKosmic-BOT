case 'rolette':;case 'roleta':
                if (!isxp) return await kill.reply(from, mess.needxpon(), id)
                const limitrl = await gaming.getLimit(user, daily);if (gaming.isLimit(limitrl) == 1) return await kill.reply(from, mess.limitgame(), id)
                const checkxpr = await gaming.getValue(user, nivel, 'xp');const xpMenorT = parseInt(checkxpr / 2, 10)
                if (isNaN(args[0]) || !isInt(args[0]) || Number(args[0]) >= xpMenorT || Number(args[0]) < 250) return await kill.reply(from, mess.gaming(checkxpr, xpMenorT), id)
                var nrolxp = Math.floor(Math.random() * -milSort) - Number(args[0]);var prolxp = Math.floor(Math.random() * milSort) + Number(args[0])
                side == 1 ? await kill.sendFileFromUrl(from, 'https://i.ibb.co/vQj6nq4/roleta1.png', 'rol1.png', mess.loseshot(nrolxp), id) : await kill.sendFileFromUrl(from, 'https://i.ibb.co/PwKR2nR/roleta.jpg', 'rol.jpg', mess.winshot(prolxp), id)
                side == 1 ? await gaming.addValue(user, Number(nrolxp), nivel, 'xp') : await gaming.addValue(user, Number(prolxp), nivel, 'xp')
                if (noLimits == 0) await gaming.addLimit(user, daily, './lib/config/Gerais/diario.json')
                break
