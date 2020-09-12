<template>
	<div class="modal-wrapper">
		<div class="modal">
			<div class="modal-dialog modal-lg">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">Get the dominant colors of your image</h5>

						<button
							@click="$emit('toggle-cooper')"
							type="button"
							class="close"
							aria-label="Close"
						>
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<!-- Cooper content -->

						<!-- Img processing -->
						<div class="container">
							<div class="row">
								<div class="col" />
								<div class="col-lg-8 col-md-12">
									<img
										class="img-fluid"
										:src="preview"
										alt="Image preview"
										crossorigin="Anonymous"
									/>

									<div style="height: 120px;">
										<!-- Toggle between the two options -->
										<div class="custom-control custom-switch mt-3 float-right">
											<input
												type="checkbox"
												class="custom-control-input"
												id="toggle-img-preview"
												v-model="localfile"
											/>
											<label
												class="custom-control-label"
												for="toggle-img-preview"
											></label>
										</div>
										<!-- Toggle between the two options -->
										<label for="file-processing" class="mt-3"
											>Step 1: Choose an image {{ localfileText }}</label
										>

										<transition name="input-fade">
											<!-- From local mashine -->
											<div
												v-if="localfile"
												key="local"
												class="input-group mb-3"
											>
												<div class="custom-file">
													<input
														class="custom-file-input"
														id="file-processing"
														type="file"
														@change="changePreviewFile()"
													/>
													<label
														class="custom-file-label"
														for="inputGroupFile01"
														>Select a picture</label
													>
												</div>
											</div>
											<!-- / From local mashine -->

											<!-- From the Internet -->
											<div v-else key="url" class="input-group mb-3">
												<input
													type="text"
													class="form-control"
													id="url-processing"
													v-model="imgUrl"
												/>

												<!-- Button to download image -->
												<div class="input-group-append">
													<!-- Download active -->
													<button
														disabled
														v-if="downloading"
														class="btn btn-primary "
													>
														<div
															class="spinner-border text-light"
															role="status"
															style="height: 25px; width: 25px;"
														>
															<span class="sr-only">Loading...</span>
														</div>
													</button>
													<!-- / Download active -->

													<!-- Download idle -->
													<button
														v-else
														id="url-button"
														@click="changePreviewUrl()"
														class="btn btn-outline-primary "
													>
														Update preview
													</button>
													<!-- / Download idle -->
												</div>

												<!-- / Button to download image -->

												<small style="color: red"
													>Please note: This request uses the
													<a
														href="https://cors-anywhere.herokuapp.com"
														target="_blank"
													>
														cors-anywhere</a
													>
													proxy from herokuapps</small
												>
											</div>
											<!-- / From the Internet -->
										</transition>
									</div>
								</div>
								<div class="col" />
							</div>
						</div>
						<!-- / Img processing -->

						<!-- Number of colors extracted -->
						<div class="container">
							<div class="row">
								<div class="col" />
								<div class="col-lg-8 col-sm-12">
									<label for="how-many-colors"
										>Step 2: # of colors extracted</label
									>
									<div class="form-group cooper-actions">
										<input
											id="how-many-colors"
											v-model="value"
											type="range"
											min="0"
											max="20"
											class="form-control-range"
										/>

										<input
											disabled
											style="width: 3rem;"
											type="text"
											class="form-control ml-2"
											v-model="value"
										/>
									</div>
								</div>
								<div class="col" />
							</div>
						</div>
						<!-- / Numbers of colors extracted -->

						<!-- Action buttons -->
						<div class="container">
							<div class="row">
								<div class="col" />
								<div class="col-lg-4 col-sm-12">
									<div class="input-group mt-2 mb-2">
										<label for="button-push-to-collection">Step 3:</label>
										<button
											@click="extractRgb"
											type="button"
											class="btn btn-primary"
										>
											<i class="fas fa-palette" /> Get dominant colors
										</button>
									</div>
								</div>
								<div class="col-lg-4 col-sm-12">
									<div class="input-group mt-2 mb-2">
										<label for="button-push-to-collection">Step 4:</label>
										<button
											id="button-push-to-collection"
											@click="emitColors"
											type="button"
											class="btn btn-primary"
										>
											<i class="fas fa-paper-plane" /> Push to collection
										</button>
									</div>
								</div>
								<div class="col" />
							</div>
						</div>
						<!-- / Action buttons -->

						<!-- / Cooper content -->
					</div>

					<div class="modal-footer">
						<!-- Color preview -->
						<transition-group
							name="preview-slide"
							tag="div"
							class="container cooper-preview-wrapper"
						>
							<div v-for="color in cooperColors" :key="color">
								<div
									:style="{ 'background-color': color }"
									class="cooper-preview"
								/>
							</div>
						</transition-group>
						<!-- / Color preview  -->
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import ColorThief from 'colorthief';
import preview from '@/assets/sample.png';
import { rgbArrToStr, rgbToHex } from '@/utils/colorFuns';

export default {
	name: 'Cooper',

	data() {
		return {
			// Initial preview image
			preview,

			// Data for the file preview
			localfile: true,
			imgUrl: '',
			downloading: false,

			// props for colorthief
			index: 1,
			value: 10,
			extractedRgb: [
				[61, 52, 150],
				[223, 72, 167],
				[43, 167, 199],
				[154, 57, 147],
				[149, 40, 72],
			],
		};
	},

	computed: {
		// Return label for the image input
		localfileText() {
			return this.localfile ? 'locally' : 'from the internet';
		},
		// Calculate the preview colors
		cooperColors() {
			const cooperColors = this.extractedRgb.map((rgbArray) => {
				return rgbArrToStr(rgbArray);
			});

			return cooperColors; // Array of rgbs
		},

		// Make sure the number of extracted colors is a number
		numExtractedColors() {
			return parseInt(this.value);
		},
	},

	methods: {
		// When a new img is placed in the file input, update the preview accordingly
		changePreviewFile() {
			const file = document.querySelector('input[type=file]').files[0];
			const reader = new FileReader();
			let preview = document.querySelector('img');

			reader.onloadend = () => {
				preview.src = reader.result;
			};
			reader.readAsDataURL(file);
		},

		// When a new URL is confirmed by the user, update the preview
		changePreviewUrl() {
			this.downloading = true;
			let preview = document.querySelector('img');

			// Note that this axios request uses a cors anywhere proxy
			fetch('https://cors-anywhere.herokuapp.com/' + this.imgUrl)
				.then((response) => response.blob())
				.then((blob) => {
					console.log(blob);
					if (blob.type.indexOf('image') === -1) {
						this.$emit('add-message', {
							type: 'warning',
							value: 'The URL you have specified does not point to an image',
						});
						return (this.downloading = false);
					}
					preview.src = window.URL.createObjectURL(blob);
					this.downloading = false;
				})
				.catch((e) => {
					this.$emit('add-message', {
						type: 'danger',
						value: 'The image could not be fetched.' + e,
					});
					this.downloading = false;
				});
		},

		// Use colorthief to extract the number of extracted colors from the img
		extractRgb() {
			try {
				this.extractedRgb = [];
				const colorThief = new ColorThief();
				const img = document.querySelector('img');
				const extractedColors = colorThief.getPalette(
					img,
					this.numExtractedColors
				);
				this.extractedRgb = extractedColors;
			} catch (e) {
				this.$emit('add-message', {
					type: 'danger',
					value: 'You are not permitted to extract from this URL',
				});
			}
		},

		// Calculate the Rgb and Hex colors extracted from the img.
		// Then, emit them to the parent component
		emitColors() {
			const vm = this;
			const extracted = this.extractedRgb;

			extracted.forEach((rgbArray) => {
				const rgb = rgbArrToStr(rgbArray);
				const hex = rgbToHex(rgbArray[0], rgbArray[1], rgbArray[2]);

				vm.$emit('add-color', { rgb: rgb, hex: hex });
			});
		},
	},
};
</script>

<style scoped>
img {
	max-height: 300px;
	display: block; 
	margin: auto;
}

button.btn {
	width: 100%;
	max-height: 38px;
	min-width: 140px;
}

.modal-wrapper {
	position: absolute;
	top: 0;
	z-index: 3;
	height: 100%;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.2);
}

.modal {
	z-index: 4;
	display: block;
	position: absolute;
	overflow-y: auto;
}

.cooper-preview-wrapper,
.cooper-actions {
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.cooper-preview {
	height: 2rem;
	width: 2rem;
	border-radius: 0.2rem;
}

.custom-control-label {
	font-weight: 400;
}

/* Animation styles for the preview colors */
.preview-slide-enter {
	transform: translateY(-20px);
	opacity: 0;
}

.preview-slide-enter-active {
	transition: all 1.5s;
}

.preview-slide-leave-active {
	position: absolute;
	transform: translateY(20px);
	transition: all 1.5s;
	opacity: 0;
}

.preview-slide-move {
	transition: all 1.5s;
}

/* Animation style for the inputs */
.input-fade-enter {
	transform: translateX(-25px);
	opacity: 0;
}

.input-fade-enter-active {
	transition: all 1s;
}

.input-fade-leave-active {
	width: 94%;
	position: absolute;
	transform: translateX(25px);
	opacity: 0;
	transition: transform 1s, opacity 1s;
}
</style>
