import { writeFileSync } from 'fs'
export default defineEventHandler(async (event) => {
	const form = await readMultipartFormData(event)
	const [file] = form ?? []

	if(!file) {
		createError({
			status: 400,
			statusMessage: "file required"
		})
	}

	const ext = file.filename.split(".")[1]
	const content = file.data
	const path = `/tmp/${Date.now()}.${ext}`

	//salvar a imagem na pasta tmp
	writeFileSync(path, content)

	console.log('form', form)
	return {ok: true}
})