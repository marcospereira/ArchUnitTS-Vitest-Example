import { metrics } from 'archunit';
import { describe, it, expect } from 'vitest';

describe('Code Quality Rules', () => {
	it('business classes should have high cohesion', async () => {
		const rule = metrics().inFolder('src/business').lcom().lcom96b().shouldBeBelow(0.8);
		await expect(rule).toPassAsync();
	});

	it('ui classes should have high cohesion', async () => {
		const rule = metrics().inFolder('src/ui').lcom().lcom96b().shouldBeBelow(0.3);
		await expect(rule).toPassAsync();
	});

	it('service classes should have high cohesion', async () => {
		const rule = metrics().inFolder('src/services').lcom().lcom96b().shouldBeBelow(0.8);
		await expect(rule).toPassAsync();
	});

	it('all classes should have kinda high cohesion', async () => {
		const rule = metrics().lcom().lcom96b().shouldBeBelow(0.9);
		await expect(rule).toPassAsync();
	});
});
