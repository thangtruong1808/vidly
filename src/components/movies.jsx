import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
	state = {
		movies: getMovies(),
	};

	handleDelete = (movie) => {
		const movies_filtered = this.state.movies.filter(
			(m) => m._id !== movie._id
		);
		this.setState({ movies: movies_filtered });
	};

	render() {
		const { length: countMovies } = this.state.movies;
		if (countMovies === 0) {
			return (
				<p className="badge bg-warning text-dark">
					There are no movies in the database.
				</p>
			);
		}
		return (
			<div>
				<p className="badge bg-success">
					Showing {countMovies} movies in the databse
				</p>
				<table className="table">
					<thead>
						<tr>
							<th>ID</th>
							<th>Title</th>
							<th>Genre</th>
							<th>Stock</th>
							<th>Rate</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{this.state.movies.map((movie) => (
							<tr key={movie._id}>
								<td>{movie._id}</td>
								<td>{movie.title}</td>
								<td>{movie.genre.name}</td>
								<td>{movie.numberInStock}</td>
								<td>{movie.dailyRentalRate}</td>
								<td>
									<button
										onClick={() => this.handleDelete(movie)}
										className="btn btn-danger btn-sm"
									>
										Delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		);
	}
}

export default Movies;
