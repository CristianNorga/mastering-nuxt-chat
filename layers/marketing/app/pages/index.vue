<script setup lang="ts">
// Añade un nombre multi‑palabra al componente
defineOptions({ name: 'IndexPage' });

definePageMeta({
	layout: false,
});

const appConfig = useAppConfig();

const { createChatAndNavigate } = useChats();
const { isAuthenticated } = useAuth();

async function handleCreateChat() {
	try {
		if (!isAuthenticated.value) {
			await navigateTo('/login');
			return;
		}

		await createChatAndNavigate();
	} catch (error) {
		console.error('Failed to create new chat:', error);
		await navigateTo('/login');
	}
}
</script>

<template>
	<div class="landing-page">
		<!-- Hero Section -->
		<UContainer class="hero-section">
			<div class="hero-content">
				<h1 class="hero-title">
					{{ appConfig.title }}
				</h1>
				<p class="hero-subtitle">
					Experimente el futuro de la conversación con nuestra plataforma de chat
					inteligente. Inicie conversaciones significativas impulsadas por tecnología
					de IA de vanguardia.
				</p>
				<UButton
					class="text-center font-bold self-center"
					size="xl"
					@click="handleCreateChat"
				>
					Empiece Su Primer Chat
				</UButton>
			</div>
			<div class="hero-image">
				<NuxtImg src="/hero.png" alt="Chat Interface Preview" class="hero-img" />
			</div>
		</UContainer>

		<!-- Features Section -->
		<UContainer class="features-section">
			<div class="section-wrapper">
				<h2 class="section-title">¿Por qué elegir nuestra plataforma de chat?</h2>
				<div class="features-grid">
					<div class="feature-card">
						<NuxtImg
							src="/ai-conversations.png"
							alt="AI Powered"
							class="feature-image"
							width="200"
							densities="x1"
						/>
						<h3 class="feature-title">Conversaciones Impulsadas por IA</h3>
						<p class="feature-description">
							Experimente respuestas inteligentes y un flujo de conversación natural
							con nuestra avanzada tecnología de IA.
						</p>
					</div>

					<div class="feature-card">
						<NuxtImg src="/realtime.png" alt="Real Time" class="feature-image" />
						<h3 class="feature-title">Mensajería en Tiempo Real</h3>
						<p class="feature-description">
							Respuestas instantáneas y comunicación fluida con entrega de mensajes
							ultrarrápida.
						</p>
					</div>

					<div class="feature-card">
						<NuxtImg src="/secure.png" alt="Secure" class="feature-image" />
						<h3 class="feature-title">Seguro y Privado</h3>
						<p class="feature-description">
							Sus conversaciones están protegidas con medidas de seguridad y privacidad
							de nivel empresarial.
						</p>
					</div>
				</div>
			</div>
		</UContainer>

		<!-- Benefits Section -->
		<UContainer class="benefits-section">
			<div class="benefits-content">
				<div class="benefits-text">
					<h2 class="section-title">Transforme Su Comunicación</h2>
					<p class="benefits-description">
						Nuestra plataforma de chat revoluciona la forma en que interactúa con la
						IA. Ya sea que esté buscando información, generando ideas o teniendo
						conversaciones informales, ofrecemos una experiencia intuitiva y poderosa.
					</p>
					<div class="benefits-list">
						<div class="benefit-item">
							<UIcon name="i-heroicons-check-circle" class="benefit-icon" />
							<span>Respuestas instantáneas de IA</span>
						</div>
						<div class="benefit-item">
							<UIcon name="i-heroicons-check-circle" class="benefit-icon" />
							<span>Flujo de conversación natural</span>
						</div>
						<div class="benefit-item">
							<UIcon name="i-heroicons-check-circle" class="benefit-icon" />
							<span>Disponibilidad 24/7</span>
						</div>
					</div>
				</div>
				<div class="benefits-image">
					<NuxtImg
						src="/people.png"
						alt="Communication Benefits"
						class="benefits-img"
					/>
				</div>
			</div>
		</UContainer>

		<!-- CTA Section -->
		<UContainer class="cta-section">
			<div class="section-wrapper">
				<div class="cta-content">
					<h2 class="cta-title">¿Listo para empezar?</h2>
					<p class="cta-subtitle">
						Únase a miles de usuarios que ya están experimentando el futuro de la
						conversación con IA.
					</p>
					<UButton
						class="cta-button"
						size="xl"
						variant="outline"
						@click="handleCreateChat"
					>
						Crear un nuevo chat
					</UButton>
				</div>
			</div>
		</UContainer>
	</div>
</template>

<style scoped>
.landing-page {
	min-height: 100vh;
	background: var(--ui-bg);
	color: var(--ui-text);
	margin-bottom: 3rem;
}

/* Hero Section */
.hero-section {
	padding: 10rem 0;
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 3rem;
	align-items: center;
	background: var(--ui-bg);
}

.hero-content {
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
}

.hero-title {
	font-size: 3.5rem;
	font-weight: 800;
	line-height: 1.1;
	color: var(--ui-text-highlighted);
}

.hero-subtitle {
	font-size: 1.25rem;
	color: var(--ui-text-muted);
	line-height: 1.6;
}

.hero-image {
	display: flex;
	justify-content: center;
}

.hero-img {
	width: 100%;
	max-width: 600px;
	height: auto;
	border-radius: 1rem;
}

/* Section Wrapper for rounded corners */
.section-wrapper {
	background: var(--ui-bg-muted);
	border-radius: 2rem;
	margin: 0 1rem 2rem 1rem;
	padding: 2rem 1rem;
}

/* Features Section */
.features-section {
	padding: 6rem 0;
	background: transparent;
}

.section-title {
	font-size: 2.5rem;
	font-weight: 700;
	text-align: center;
	margin-bottom: 3rem;
	color: var(--ui-text-highlighted);
}

.features-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	gap: 3rem;
	padding: 0 2rem;
}

.feature-card {
	background: var(--ui-bg-elevated);
	border: 1px solid var(--ui-border);
	border-radius: 1rem;
	padding: 3rem;
	text-align: center;
	transition: transform 0.2s;
}

.feature-card:hover {
	transform: translateY(-4px);
	border-color: var(--ui-border-accented);
}

.feature-image {
	width: 100%;
	height: auto;
	min-height: 180px;
	object-fit: contain;
	border-radius: 0.5rem;
	margin-bottom: 1.5rem;
}

.feature-title {
	font-size: 1.5rem;
	font-weight: 600;
	margin-bottom: 1rem;
	color: var(--ui-text-highlighted);
}

.feature-description {
	color: var(--ui-text-muted);
	line-height: 1.6;
}

/* Benefits Section */
.benefits-section {
	padding: 5rem 0;
	background: var(--ui-bg);
}

.benefits-content {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 3rem;
	align-items: center;
}

.benefits-text {
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
}

.benefits-description {
	font-size: 1.125rem;
	color: var(--ui-text-muted);
	line-height: 1.6;
}

.benefits-list {
	display: flex;
	flex-direction: column;
	gap: 1rem;
}

.benefit-item {
	display: flex;
	align-items: center;
	gap: 0.75rem;
}

.benefit-icon {
	color: var(--ui-primary);
	font-size: 1.25rem;
}

.benefits-image {
	display: flex;
	justify-content: center;
}

.benefits-img {
	width: 100%;
	max-width: 500px;
	height: auto;
	border-radius: 1rem;
}

/* CTA Section */
.cta-section {
	padding: 5rem 0;
	background: transparent;
}

.cta-content {
	text-align: center;
}

.cta-title {
	font-size: 2.5rem;
	font-weight: 700;
	margin-bottom: 1rem;
	color: var(--ui-text-highlighted);
}

.cta-subtitle {
	font-size: 1.25rem;
	color: var(--ui-text-muted);
	margin-bottom: 2rem;
}

.cta-button {
	padding: 1rem 2rem;
}

/* Responsive Design */
@media (max-width: 768px) {
	.hero-section,
	.benefits-content {
		grid-template-columns: 1fr;
		text-align: center;
	}

	.hero-title {
		font-size: 2.5rem;
	}

	.section-title {
		font-size: 2rem;
	}

	.features-grid {
		grid-template-columns: 1fr;
	}

	.cta-images {
		flex-direction: column;
		align-items: center;
	}
}
</style>
