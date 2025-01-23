import SearchForm from '@/components/ui/SearchForm'
import StartupCard, { type StartupTypeCard } from '@/components/ui/StartupCard'
import { sanityFetch, SanityLive } from '@/sanity/lib/live'
import { STARTUP_QUERY } from '@/sanity/lib/queries'

export default async function Home({
	searchParams
}: { searchParams: Promise<{ query?: string }> }) {
	const query = (await searchParams).query
	const params = { search: query || null }
	const { data: posts } = await sanityFetch({ query: STARTUP_QUERY, params })

	return (
		<>
			<section className="pink_container">
				<h1 className="heading">
					pitch Your Startup, <br /> Connect With Entrepreneurs
				</h1>
				<p className="sub-heading !max-w-3xl">
					Submit ideas, Vote on Pitches, and Get Noticed in Virtual
					Competitiones.
				</p>
				<SearchForm query={query} />
			</section>
			<section className="section_container">
				<p className="text-30-semibold">
					{query ? `Search result for "${query}"` : 'All Startups'}
				</p>
				<ul className="mt-7 card_grid">
					{posts?.length > 0 ? (
						posts.map((post: StartupTypeCard) => (
							<StartupCard key={post._id} post={post} />
						))
					) : (
						<p className="no-results">no startups found</p>
					)}
				</ul>
			</section>
			<SanityLive />
		</>
	)
}
